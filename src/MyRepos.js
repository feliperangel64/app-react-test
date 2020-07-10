import React, { Component } from 'react';

class MyRepos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repositorios: [],
            novoRepositorio: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeRepo = this.removeRepo.bind(this);

    }

    async componentDidMount() {
        const response = await fetch("https://api.github.com/users/feliperangel64/repos");
        const data = await response.json();
        const repositorios = data.map(item => item.name);
        this.setState({ repositorios });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ repositorios: [...this.state.repositorios, this.state.novoRepositorio] })
        this.setState({ novoRepositorio: '' })
    }

    removeRepo(element) {
        const repositorios = this.state.repositorios.filter(item => item !== element);
        this.setState({ repositorios });

    }

    render() {
        return (
            <>
                <h1>Adicionar Repositórios</h1>
                <form data-testid="novo-repo-form" onSubmit={this.handleSubmit}>
                    <input data-testid="novo-repo-input" type='text' placeholder="Add novo repositório" value={this.state.novoRepositorio} onChange={e => this.setState({ novoRepositorio: e.target.value })} />
                    <button data-testid="novo-repo-btn" type="submit">Adicionar</button>
                </form>
                <h1>Meus Repositórios</h1>
                <ul>
                    {this.state.repositorios.map((item, index) => {
                        return <li data-testid={item} key={index}>{item}<button onClick={() => this.removeRepo(item)}>X</button></li>
                    })}
                </ul>
            </>
        );
    }
}

export default MyRepos;