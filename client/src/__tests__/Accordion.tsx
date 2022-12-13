import { render, fireEvent } from '@testing-library/react';
import Accordion from '../components/accordion_form/Accordion';

test('updates data with correct name and value from input', () => {
  const data = {
    firstName: 'John',
    surName: 'Smith',
    email: 'test@example.com'
  };
  const { getByTestId } = render(<Accordion />);
  const surNameInput = getByTestId('sur-name-input');
  fireEvent.change(surNameInput, {
    target: {
      name: 'surName',
      value: 'Doe'
    }
  });
  expect(data).toEqual({
    firstName: 'John',
    surName: 'Doe', // updated
    email: 'test@example.com'
  });
});
