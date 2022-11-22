import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

function App() {

    const data = [
        {id: 1, name: "David C", salary:1000, increase: true},
        {id: 2, name: "Artur K", salary:1001, increase: false},
        {id: 3, name: "George D", salary:1002, increase: false}
    ];

    console.log(data)
    return (
        <div className="app"> 
            <AppInfo/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data = {data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;