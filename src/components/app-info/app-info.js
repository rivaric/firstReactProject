import './app-info.css';

const AppInfo = (props) => {
    const {headcount, award} = props;
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании facebook</h1>
            <h2>Общее число сотрудников: {headcount}</h2>
            <h2>Премию получат: {award}</h2>
        </div>
    )
}

export default AppInfo;