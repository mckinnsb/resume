#========================
#CONFIG
#========================
set :application, "stew"

set :scm, :git
set :repository, "git@github.com:mckinnsb/resume.git"
set :branch, "master"
set :ssh_options, { :forward_agent => true }

set :domain, "96.126.106.220"
set :stage, :production
set :user, "root"
set :use_sudo, false
set :runner, "nginx"
set :deploy_to, "/var/www/#{application}"

#========================
#ROLES
#========================
role :web, domain
role :app, domain
role :db,  domain

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
namespace :deploy do
 task :start do; end
 task :bundler do
   run "cd #{release_path} && bundle install --path vendor/"
 end
 task :stop do; end
 task :restart do; end
end

after "deploy:update_code", "deploy:bundler"

