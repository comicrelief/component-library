import React from 'react';
import 'jest-styled-components';
import TestRenderer from 'react-test-renderer';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import EmailSignUp from './EmailSignUp';
import RichText from '../../Atoms/RichText/RichText';

const { act } = TestRenderer;

it('renders correctly', () => {
  const top =
    '<h1> Top Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
  const success =
    '<h1> Success Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
  const privacy =
    'check <a href="https://www.comicrelief.com/privacy-notice">Privacy policy</a>';
  const tree = renderWithTheme(
    <>
      <EmailSignUp
        title="sign up letter"
        topCopy={<RichText markup={top} />}
        successCopy={<RichText markup={success} />}
        isSuccess={false}
        errorMsg=""
        buttonColor="teal"
        privacyCopy={<RichText markup={privacy} />}
        subscribe={() => 'Done'}
        validate={() => true}
      />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders ESU School correctly', () => {
  const top =
    '<h1> Top Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
  const success =
    '<h1> Success Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
  const privacy =
    'check <a href="https://www.comicrelief.com/privacy-notice">Privacy policy</a>';
  const selectItems = [
    { value: '', displayValue: '-- Select age group --' },
    { value: 'Option one', displayValue: 'The first option' },
    {
      value: 'Option two',
      displayValue: 'The second option'
    },
    { value: 'Option three', displayValue: 'The third option' },
    { value: 'Option four', displayValue: 'The fourth option' }
  ];
  const mockNext = jest.fn();
  const tree = renderWithTheme(
    <>
      <EmailSignUp
        title="sign up letter"
        topCopy={<RichText markup={top} />}
        successCopy={<RichText markup={success} />}
        schoolsCopy="Now please select your teaching group so you get the right updates."
        selectItems={selectItems}
        isSuccess={false}
        isSchools
        errorMsg=""
        buttonColor="teal"
        privacyCopy={<RichText markup={privacy} />}
        subscribe={mockNext}
        validate={() => true}
      />
    </>
  );
  const input = tree.root.findAllByType('input')[0];
  input.value = 'test@test.com';

  act(() => {
    /* fire events that update state */
    tree.root.findAllByType('input')[1].props.onClick();
  });

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
