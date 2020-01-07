// @flow
import { useState } from "react";
import PropTypes from "prop-types";

import { refreshDisplay } from "./reducer.js";

import { connect } from "react-redux";

import WebFont from "webfontloader";

type FontFixProps = {
  font: string,
  css: string,
  refreshDisplay: () => void
};

function FontFix(props: FontFixProps) {
  const { css, font, refreshDisplay } = props;
  const [initialized, setInitialized] = useState(false);

  if (!initialized) {
    WebFont.load({
      active: () => {
        refreshDisplay();
      },
      custom: {
        families: [font],
        urls: [css]
      }
    });

    setInitialized(true);
  }

  return null;
}

FontFix.propTypes = {
  font: PropTypes.string,
  css: PropTypes.string
};

const mapDispatchToProps = {
  refreshDisplay
};

export default connect(null, mapDispatchToProps)(FontFix);
