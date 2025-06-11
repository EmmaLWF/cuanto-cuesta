import './search.css';
// import { useState } from  'react';
import { WithContext as ReactTags, SEPARATORS } from 'react-tag-input';

function Search(props) {
  const tags = props.tags;
  const setTags = props.setTags


  const handleDelete = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const onTagUpdate = (index, newTag) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1, newTag);
    setTags(updatedTags);
  };

  const handleAddition = (tag) => {
    setTags((prevTags) => {
      return [...prevTags, tag];
    });
  }


  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  const onClearAll = () => {
    setTags([]);
  };

  console.log('tags', tags)

  return (
    <div className='searchBar'>
      <h1> ¿Qué precio quieres saber? </h1>
      <div className='searchBar20 search-container'>
        <ReactTags
        classNames={{
            root: 'react-tags-wrapper', // Clase para el contenedor principal de la librería
            tag: 'react-tags__tag', // Clase para cada etiqueta
            remove: 'react-tags__remove', // Clase para el botón 'x'
            textInput: 'react-tags__textInput', // Clase para el campo de texto
            tags: 'tagsClass',
            tagInput: 'tagInputClass',
            tagInputField: 'tagInputFieldClass',
            selected: 'selectedClass',
            suggestions: 'suggestionsClass',
            activeSuggestion: 'activeSuggestionClass',
            editTagInput: 'editTagInputClass',
            editTagInputField: 'editTagInputField',
            clearAll: 'clearAllClass',
          }}
          tags={tags}
          // suggestions={suggestions}
          separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          onTagUpdate={onTagUpdate}
          inputFieldPosition="bottom"
          editable
          clearAll
          onClearAll={onClearAll}
          clearAllLabel="Limpiar"
          maxTags={7}
          placeholder='Agrega una nueva etiqueta...'
          ariaAttrs="Limpiar"
        
        />
        {/* <img src={searchIcon} alt="Buscar" className="search-icon" /> */}
      </div>
    </div>
  );
}

export default Search;