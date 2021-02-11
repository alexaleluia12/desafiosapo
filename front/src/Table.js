import React from 'react';


class Table extends React.Component {

    render() {
        if (this.props.data == null) return null;
        let rows = [];

        this.props.data.forEach(aliment => {
            rows.push(
              <tr>
                  <td>{aliment.name}</td>
                  <td>{aliment.amount}g</td>
                  <td>{aliment.protein}g</td>
                  <td>{aliment.carbohydrate}g</td>
                  <td>{aliment.fat}g</td>
              </tr>
            );
        });

    return <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Proteínas</th>
            <th scope="col">Carboitratos</th>
            <th scope="col">Gorduras</th>
          </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>;
    }
}
export default Table;
