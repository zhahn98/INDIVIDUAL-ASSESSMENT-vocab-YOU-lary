import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Vocab Words</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <h5 class="card-definition">Definition: ${item.definition}</h5>
              <h5 class="card-category">Category: ${item.category}</h5>
            <hr>
            <i id="edit-card-btn--${item.firebaseKey}" class="edit btn btn-info">Edit</i>
            <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
