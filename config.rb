# frozen_string_literal: true

require 'slim'

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
# With no layout

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :relative_links, true
activate :relative_assets

# With alternative layout
# page '/path/to/file.html', layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
%w[animalwars tnd].each do |name|
  proxy "#{name}.html", 'devlog.html', locals: { game: name }, ignore: true
end

# Simple class to save the resume as a PDF after build
class PDFBuild < Middleman::Extension
  def initialize(app, options = {}, &block)
    super
  end

  def after_build(_)
    file = File.new 'build/resume.html'

    kit = PDFKit.new(file,
                     page_size: 'Letter',
                     print_media_type: true)

    kit.to_file('build/resume.pdf')
  end
end

# Simple class to build the react wrapper for RustyZ
class ReactBuild < Middleman::Extension
  def initialize(app, options = {}, &block)
    super
  end

  def after_build(_)
    Dir.chdir 'secret_machine' do
      # move into secret machine, build, and move files out to the
      # middleman build directory
      `yarn build --prod`
      target = '../build'
      FileUtils.cp Dir.glob('build/*.js'), target
      FileUtils.cp 'build/index.html', File.join(target, 'secret.html')
      FileUtils.cp_r 'build/static', target
    end
  end
end

::Middleman::Extensions.register :pdf_build, PDFBuild
::Middleman::Extensions.register :react_build, ReactBuild

# these have to be on separate lines
activate :pdf_build
activate :react_build

###
# Helpers
###

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
