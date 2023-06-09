import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="word">Vocab Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabWord" placeholder="Enter New Vocab Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition:</label>
        <input type="text" class="form-control" id="definition" placeholder="Enter Definition" value="${obj.definition || ''}" required>
      </div><hr>
      <div class="form-group">
        <label for="category">Category:</label>
        <select id="category" name="category">
          <option option value="JS">JS</option>
          <option value="Python">Python</option>
          <option value="HTML/CSS">HTML/CSS</option>
          <option value="Misc.">Misc.</option>
        </select><hr>
      <button type="submit" class="btn btn-primary">Submit Vocab Word
      </button>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
