### BLOG POST

Your task is to create a React application called "Blog Post" that allows users to create, display, and delete blog posts. The application requirements are detailed below, and the finished application must pass all of the unit tests.

Detailed Requirements

The "Blog Post" component should have two input fields: one for the post title and another for the post description (textarea).
The application should display a "Create" button that, when clicked, adds a new blog post to the list of existing posts.
The "Create" button should only add a post if both the title and description fields have values. If either field is empty, the button should not create a post.
Once a post is successfully created, both the title and description fields should be cleared.
The list of created blog posts should be displayed in a grid layout, with each post appearing inside a box.
Each box should include:
The post's title.
The post's description.
A "Delete" button to remove the specific post from the list.


Sample Interaction
Initial State

The title and description fields are empty.
No blog posts are displayed.
User Action 1

User enters a title and description in the respective input fields.
User clicks the "Create" button.
The new post is added to the grid with the entered title and description.
The input fields are cleared.
User Action 2

User clicks the "Delete" button next to a blog post.
The selected blog post is removed from the grid.
Hey there! Please enter the full-screen mode for the best experience



### Testing

1. Initial State:
No posts are displayed initially.
Title and description fields are empty.

2. Adding Posts:
Enter text into both fields.
Click "Create Post".
Post appears in the grid.
Input fields are cleared.

3. Deleting Posts:
Click the "Delete" button on a post to remove it from the grid.

<!-- Blog Post Pass result-->
Blog Post Application : initially the title and description should be empty
Blog Post Application : should add new blog post on clicking button when title and description are added
Blog Post Application : should not add new blog post on clicking button if either title or description are empty
Blog Post Application : check the content of new blog post with the content added while creating/entering inputs to title and description
Blog Post Application : delete button should delete the respective blog post, after adding multiple posts
Blog Post Application : should clear title and description fields after adding a new blog post

<!-- App.test.js -->
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import App from "./App";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});

const TEST_IDS = {
  titleInput: "title-input",
  descriptionInput: "description-input",
  createButton: "create-button",
  postsContainer: "posts-container",
};

let titleInput, descriptionInput, createButton, postsContainer;

beforeEach(() => {
  const app = render(<App />);
  titleInput = app.getByTestId(TEST_IDS.titleInput);
  descriptionInput = app.getByTestId(TEST_IDS.descriptionInput);
  createButton = app.getByTestId(TEST_IDS.createButton);
  postsContainer = app.getByTestId(TEST_IDS.postsContainer);
});

describe("Blog Post Application", () => {
  test("initially the title and description should be empty", () => {
    expect(titleInput.value).toBe("");
    expect(descriptionInput.value).toBe("");
  });

  test("should add new blog post on clicking button when title and description are added", () => {
    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(descriptionInput, { target: { value: "Test Description" } });
    fireEvent.click(createButton);

    const postBox = postsContainer.children[0];
    expect(postBox.children[0]).toHaveTextContent("Test Title");
    expect(postBox.children[1]).toHaveTextContent("Test Description");
    expect(postBox.children[2]).toBeInTheDocument(); // This is the delete button
    expect(postBox.children[2]).toHaveTextContent("Delete");
  });

  test("should not add new blog post on clicking button if either title or description are empty", () => {
    // Test with empty title
    fireEvent.change(descriptionInput, { target: { value: "Test Description" } });
    fireEvent.click(createButton);
    expect(postsContainer.children.length).toBe(0);

    // Test with empty description
    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(descriptionInput, { target: { value: "" } });
    fireEvent.click(createButton);
    expect(postsContainer.children.length).toBe(0);

    // Test with both empty
    fireEvent.change(titleInput, { target: { value: "" } });
    fireEvent.click(createButton);
    expect(postsContainer.children.length).toBe(0);
  });

  test("check the content of new blog post with the content added while creating/entering inputs to title and description", () => {
    fireEvent.change(titleInput, { target: { value: "Content Title" } });
    fireEvent.change(descriptionInput, { target: { value: "Content Description" } });
    fireEvent.click(createButton);

    const postBox = postsContainer.children[0];
    expect(postBox.children[0]).toHaveTextContent("Content Title");
    expect(postBox.children[1]).toHaveTextContent("Content Description");
  });

  test("delete button should delete the respective blog post, after adding multiple posts", () => {
    // Create multiple posts
    fireEvent.change(titleInput, { target: { value: "First Post" } });
    fireEvent.change(descriptionInput, { target: { value: "First Description" } });
    fireEvent.click(createButton);

    fireEvent.change(titleInput, { target: { value: "Second Post" } });
    fireEvent.change(descriptionInput, { target: { value: "Second Description" } });
    fireEvent.click(createButton);

    fireEvent.change(titleInput, { target: { value: "Third Post" } });
    fireEvent.change(descriptionInput, { target: { value: "Third Description" } });
    fireEvent.click(createButton);

    // Delete the second post
    const secondPostDeleteButton = postsContainer.children[1].children[2];
    fireEvent.click(secondPostDeleteButton);

    // Check the posts remaining
    expect(postsContainer.children[0].children[0]).toHaveTextContent("First Post");
    expect(postsContainer.children[1].children[0]).toHaveTextContent("Third Post");
    expect(postsContainer.children.length).toBe(2);
  });

  test("should clear title and description fields after adding a new blog post", () => {
    fireEvent.change(titleInput, { target: { value: "Title to Clear" } });
    fireEvent.change(descriptionInput, { target: { value: "Description to Clear" } });
    fireEvent.click(createButton);

    expect(titleInput.value).toBe("");
    expect(descriptionInput.value).toBe("");
  });
});
