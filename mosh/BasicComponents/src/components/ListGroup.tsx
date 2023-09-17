let items = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

items = [];

const getMessage = () => {
    return items.length === 0 ? <p>No Item Found</p> : null;
};

export default function ListGroup() {
    return (
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            {/* <List
                size="large"
                bordered
                dataSource={Items}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            /> */}
        </>
    );
}