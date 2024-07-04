import { render, screen, waitFor } from '@testing-library/react';
import DataTable from './DataTable';

function checkElement(theText, theTag)
{
    const linkElement = screen.getByText(theText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe(theTag);
}

test('renders item zero from data', () => {

  render(<DataTable />);
  checkElement("Name: hammer", "P");
  checkElement("Size: medium", "P");
  checkElement("Department: tools", "P");
  checkElement("Price: 12.5", "P");  
  checkElement("Next", "BUTTON");
  checkElement("Previous", "BUTTON");
});

 test('clicking the next button shows item 1', async () => {

    render(<DataTable />);

    const button = screen.getByText("Next");
    expect(button).toBeInTheDocument();
    button.click();

    await waitFor(() => {
        expect(screen.getByText("Price: 10.5")).toBeInTheDocument();
      });
  });