import React from 'react';

import Post  from './Post';

export default {
  title: 'Components/Post',
  component: Post
};

const Template = () => {
    return (
        <Post 
            content="I'm working in Figma tryping to design a new website that shows all my tweets!" 
            date="12/03/2020" 
        />
    )
};
export const Default = Template.bind({});
