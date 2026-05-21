function List(){

    const fruits = ["orange", "apple", "banana","mango"];
    const listItems = fruits.map(fruit => <li key = {fruit.name}>{fruit}</li> )

    return(<ul>{listItems}</ul>);

}
export default List;