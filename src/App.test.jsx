// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    // If render throws, the test fails automatically.
    // This is a smoke test.
    expect(document.body).toBeInTheDocument();
  });

  it('renders the main div text', () => {
    render(<App />);
    expect(
      screen.getByText(/code changed to push to branch/i)
    ).toBeInTheDocument();
  });

  it('renders the paragraph text about React Github actions', () => {
    render(<App />);
    expect(
      screen.getByText(/react github actions/i)
    ).toBeInTheDocument();
  });

  it('renders a <p> element for the Github actions text', () => {
    render(<App />);
    const paragraph = screen.getByText(/react github actions/i);
    // Verify the semantic tag, not just text content
    expect(paragraph.tagName).toBe('P');
  });

  it('renders the div and paragraph inside a fragment (siblings, not nested)', () => {
    render(<App />);
    const divText = screen.getByText(/code changed to push to branch/i);
    const pText = screen.getByText(/react github actions/i);

    // The <p> should NOT be a descendant of the text div
    expect(divText.contains(pText)).toBe(false);
    // Both should share the same parent (the fragment renders directly into body's container)
    expect(divText.parentElement).toBe(pText.parentElement);
  });
});