import { GENRES, PAGE_SIZE } from './constants';
import { deleteMovie, getMovies, setState, state } from './db';
import { genresWrapper, moviesCountElm, paginationWrapper, searchInput, tableBody } from './elements';
import type { Genre } from './types';

// HANDLE FUNCTIONS
function handleSelectGenre(event: MouseEvent) {
  const btn = event.target as HTMLButtonElement;
  const value = btn.dataset.value! as Genre;
  setState({ currentGenre: value, currentPage: 1 });
}

function handleChangePage(event: MouseEvent) {
  const pageItem = event.target as HTMLLIElement;
  const currentPage = +pageItem.dataset.value!;
  setState({ currentPage });
}

function handleChangeSearch(event: Event) {
  const input = event.target as HTMLInputElement;
  const search = input.value;
  setState({ search, currentPage: 1 });
}

function handleDelete(event: MouseEvent) {
  const btn = event.target as HTMLButtonElement;
  const movieId = btn.dataset.value!;

  deleteMovie(movieId);
}

// UI FUNCTIONS
export function render() {
  renderGenres();
  renderMovies();
  renderPagination();
}

function renderGenres() {
  const fragment = document.createDocumentFragment();

  for (const genre of GENRES) {
    const genreElement = document.createElement('li');
    genreElement.dataset.value = genre;
    genreElement.textContent = genre;
    genreElement.className = 'list-group-item cursor-pointer';
    if (genre === state.currentGenre) genreElement.classList.add('active');

    genreElement.addEventListener('click', handleSelectGenre);

    fragment.append(genreElement);
  }

  genresWrapper.replaceChildren(fragment);
}

function renderMovies() {
  const fragment = document.createDocumentFragment();
  const { movies, total } = getMovies();

  moviesCountElm.textContent = `Showing ${total} movies in the database.`;
  for (const movie of movies) {
    const tableRow = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = movie.title;

    const genreCell = document.createElement('td');
    genreCell.textContent = movie.genre;

    const stockCell = document.createElement('td');
    stockCell.textContent = movie.stock.toString();

    const rateCell = document.createElement('td');
    rateCell.textContent = movie.rate.toString();

    const actionsCell = document.createElement('td');
    actionsCell.className = 'flex gap-2';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'btn btn-primary btn-sm';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.dataset.value = movie.id;
    deleteBtn.addEventListener('click', handleDelete);

    actionsCell.append(editBtn, deleteBtn);

    tableRow.append(titleCell, genreCell, stockCell, rateCell, actionsCell);

    fragment.append(tableRow);
  }

  tableBody.replaceChildren(fragment);
}

function renderPagination() {
  const { total } = getMovies();
  const maxPage = Math.ceil(total / PAGE_SIZE);
  if (maxPage <= 1) return (paginationWrapper.innerHTML = '');

  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= maxPage; i++) {
    const pageItem = document.createElement('li');
    pageItem.className = 'page-item cursor-pointer';
    if (i === state.currentPage) pageItem.classList.add('active');

    const pageLink = document.createElement('a');
    pageLink.className = 'page-link';
    pageLink.textContent = i.toString();
    pageLink.dataset.value = i.toString();
    pageLink.addEventListener('click', handleChangePage);

    pageItem.append(pageLink);
    fragment.append(pageItem);
  }

  paginationWrapper.replaceChildren(fragment);
}

// LOGIC Functions
function init() {
  render();

  searchInput.addEventListener('input', handleChangeSearch);
}

window.addEventListener('load', init);
