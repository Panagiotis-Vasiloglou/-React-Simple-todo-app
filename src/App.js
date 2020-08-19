import React from "react";

import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            list: [],
        };
    }

    addToList(todo) {
        let newList = this.state.list;

        newList.push(todo);

        this.setState({
            list: newList,
            userInput: "",
        });
    }

    render() {
        return (
            <div className="App">
                <h2 className="App-title">My todo list</h2>
                <form className="App-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="App-input"
                        onChange={(e) => {
                            this.setState({ userInput: e.target.value });
                        }}
                        type="text"
                        value={this.state.userInput}
                        placeholder="Type a Todo..."
                    />
                    <button
                        className="App-button"
                        onClick={() => this.addToList(this.state.userInput)}
                        type="submit"
                    >
                        Add
                    </button>
                </form>
                <ul className="App-ul">
                    {this.state.list.map((todo) => (
                        <div className="App-todo" key={Math.random()}>
                            <li>
                                <div>
                                    {todo}
                                    <button
                                        onClick={() => {
                                            const list = this.state.list;
                                            const index = this.state.list.indexOf(
                                                todo
                                            );
                                            list.splice(index, 1);
                                            this.setState({ list: list });
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
