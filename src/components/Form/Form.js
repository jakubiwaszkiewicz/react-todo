import React from 'react';

function Form({ setInputText }) {
    const inputTextHandler = (e) => {

        setInputText(e.target.value)
    }
    return (
        <div className="Forms">
            <form>
                <input onChange={inputTextHandler} type="text" className="todo-input" />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;