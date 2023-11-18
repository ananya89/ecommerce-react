import {useEffect, useState} from 'react'

function Categories() {
    const [categories, setCategories] = useState([]); // 'categories' is state variable and 'setCategories' is setter method
    useEffect(() => { //useEffect is a React Hook that lets you synchronize a component with an external system.
     fetch('/api/categories', {method: 'post'}).then(d => d.json())
     .then((data) => {
        setCategories(data);
     })
    }, [])
    return (
        <ul className="category-list">
            {categories.map(cat =>
                <li key = {cat.id}> <a href={'#/'+cat.id}>{cat.name}</a></li>
            )}
        </ul>
    )
}

export default Categories;
