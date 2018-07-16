import renderer from 'react-test-renderer';
import React from 'react';

import LabeledIcon from '../../../app/components/Primitives/LabeledIcon';

describe('<LabeledIcon />', () => {
  jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

  it('renders properly given the correct props', () => {
    const tree = renderer
      .create(
        <LabeledIcon
          iconName="star"
          iconType="font-awesome"
          iconSize={30}
          iconColor="#222"
          item="Test Icon"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders properly for all icon types', () => {
    const treeMaterial = renderer
      .create(
        <LabeledIcon
          iconName="star"
          iconType="material"
          iconSize={30}
          iconColor="#222"
          item="Test Icon"
        />
      )
      .toJSON();

    expect(treeMaterial).toMatchSnapshot();

    const treeEntypo = renderer
      .create(
        <LabeledIcon
          iconName="github"
          iconType="entypo"
          iconSize={30}
          iconColor="#222"
          item="Test Icon"
        />
      )
      .toJSON();

    expect(treeEntypo).toMatchSnapshot();
  });

  const treeEvil = renderer
    .create(
      <LabeledIcon
        iconName="sc-github"
        iconType="evil"
        iconSize={30}
        iconColor="#222"
        item="Test Icon"
      />
    )
    .toJSON();

  expect(treeEvil).toMatchSnapshot();
});
