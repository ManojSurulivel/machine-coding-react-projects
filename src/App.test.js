// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from "react";
import App from "./App";
import { render, within, fireEvent, cleanup } from "@testing-library/react";

import { ARTICLES_DATA as articles } from "./constants";

const testIds = {
  mostUpvotedLink: "most-upvoted-link",
  mostRecentLink: "most-recent-link",
  article: "article",
};

const mostUpvotedArticles = articles.concat().sort((a, b) => {
  if (a.upvotes > b.upvotes) {
    return -1;
  }
  if (a.upvotes < b.upvotes) {
    return 1;
  }
  return 0;
});

const mostRecentArticles = articles.concat().sort((a, b) => {
  const aDate = new Date(a.date);
  const bDate = new Date(b.date);
  if (aDate > bDate) {
    return -1;
  }
  if (aDate < bDate) {
    return 1;
  }
  return 0;
});

const renderApp = () => render(<App articles={articles} />);

beforeEach(() => {});

afterEach(() => {
  cleanup();
});

const expectArticles = (articles, expectedArticles) => {
  expect(articles.length).toBe(expectedArticles.length);
  articles.forEach((article, i) => {
    const title = within(article).getByTestId("article-title").textContent;
    const upvotes = within(article).getByTestId("article-upvotes").textContent;
    const date = within(article).getByTestId("article-date").textContent;
    const expectedArticle = expectedArticles[i];
    expect([title, upvotes, date]).toEqual([
      expectedArticle.title,
      expectedArticle.upvotes.toString(),
      expectedArticle.date,
    ]);
  });
};

test("Initial articles render correctly", () => {
  const { queryAllByTestId } = renderApp();

  const articles = queryAllByTestId(testIds.article);
  expectArticles(articles, mostUpvotedArticles);
});

test("Clicking on top renders expected articles", () => {
  const { getByTestId, queryAllByTestId } = renderApp();

  const mostUpvotedLink = getByTestId(testIds.mostUpvotedLink);
  fireEvent.click(mostUpvotedLink);

  const articles = queryAllByTestId(testIds.article);
  expectArticles(articles, mostUpvotedArticles);
});

test("Clicking on newest renders expected articles", () => {
  const { getByTestId, queryAllByTestId } = renderApp();

  const mostRecentLink = getByTestId(testIds.mostRecentLink);
  fireEvent.click(mostRecentLink);

  const articles = queryAllByTestId(testIds.article);
  expectArticles(articles, mostRecentArticles);
});

test("Sequence of navigation clicks renders expected articles", () => {
  const { getByTestId, queryAllByTestId } = renderApp();

  const mostUpvotedLink = getByTestId(testIds.mostUpvotedLink);
  const mostRecentLink = getByTestId(testIds.mostRecentLink);

  const elements = [
    mostRecentLink,
    mostUpvotedLink,
    mostUpvotedLink,
    mostRecentLink,
    mostRecentLink,
    mostUpvotedLink,
  ];
  for (const elem of elements) {
    fireEvent.click(elem);
    const articles = queryAllByTestId(testIds.article);
    const expectedArticles =
      elem === mostUpvotedLink ? mostUpvotedArticles : mostRecentArticles;
    expectArticles(articles, expectedArticles);
  }
});
