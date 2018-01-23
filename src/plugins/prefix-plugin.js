/* @flow */

import type {PluginConfig, PluginResult} from './index';

import {getPrefixedStyle} from '../prefixer';

export default function prefixPlugin(
  {ExecutionEnvironment, config, style}: PluginConfig // eslint-disable-line no-shadow
): PluginResult {
  const canUseDOM = ExecutionEnvironment && ExecutionEnvironment.canUseDOM;
  const newStyle = getPrefixedStyle(style, canUseDOM, config.userAgent);
  return {style: newStyle};
}
