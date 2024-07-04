import { render, screen } from '@testing-library/react';
import DataItem from './DataItem';

function checkElement(theText, theTag)
{
    const linkElement = screen.getByText(theText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe(theTag);
}

test('renders header text', () => {

  var data = { "name": "hammer",      "pic": "hammer_medium.jpg",      "size": "medium", "department": "tools", "price": 12.50};

  render(<DataItem product={data}/>);
  checkElement("Name: hammer", "P");
  checkElement("Size: medium", "P");
  checkElement("Department: tools", "P");
  checkElement("Price: 12.5", "P"); 

});
