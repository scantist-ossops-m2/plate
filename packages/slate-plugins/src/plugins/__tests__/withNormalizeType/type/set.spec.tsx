/** @jsx jsx */

import { jsx } from '@udecode/slate-plugins-test-utils';
import { Editor } from 'slate';
import { options } from '../../../../../../../stories/config/initialValues';
import { withNormalizeTypes } from '../../../../normalizers/index';

const input = (
  <editor>
    <hh2>test</hh2>
    <hh2>test</hh2>
    <hh2>test</hh2>
  </editor>
) as any;

const output = (
  <editor>
    <hh2>test</hh2>
    <hh2>test</hh2>
    <hh2>test</hh2>
  </editor>
) as any;

it('should be', () => {
  const editor = withNormalizeTypes({
    rules: [{ path: [0], type: options.h1.type }],
  })(input as Editor);

  editor.normalizeNode([input, []]);

  expect(input.children).toEqual(output.children);
});