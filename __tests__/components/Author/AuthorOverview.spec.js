import renderer from 'react-test-renderer';
import React from 'react';
import AuthorOverview from '../../../app/components/Author/AuthorOverview';

describe('<AuthorOverview />', () => {
  it('renders correctly with all required props', () => {
    const tree = renderer
      .create(
        <AuthorOverview
          company="Formidable"
          location="Seattle, WA"
          followerCount={37}
          websiteUrl="https://parkerziegler.com"
          repoCount={22}
          organizations={[{ node: { name: 'Formidable' } }]}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
