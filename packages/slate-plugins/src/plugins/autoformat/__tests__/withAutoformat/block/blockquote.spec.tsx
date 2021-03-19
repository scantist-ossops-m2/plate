/** @jsx jsx */

import { jsx } from '@udecode/slate-plugins-test-utils';
import { withReact } from 'slate-react';
import { autoformatRulesFixtures } from '../../../../../__fixtures__/autoformat.fixtures';
import { withAutoformat } from '../../../useAutoformatPlugin';

const input = (
  <editor>
    <hp>
      {'>'}
      <cursor />
      hello
    </hp>
  </editor>
) as any;

const output = (
  <editor>
    <hblockquote>hello</hblockquote>
  </editor>
) as any;

it('should autoformat', () => {
  const editor = withAutoformat({ rules: autoformatRulesFixtures })(
    withReact(input)
  );

  editor.insertText(' ');

  expect(input.children).toEqual(output.children);
});