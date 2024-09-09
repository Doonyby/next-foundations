import LikeButton from "./like-button";
function Header({title}) {
    return <h1>{title ? title: "Default Title"}</h1>;
}

export default function HomePage() {
    const names = ['Bill', 'Bob', 'Ben'];

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="My Title" />
            <ul>{names.map(name => <li key={name}>{name}</li>)}</ul>
            <LikeButton />
        </div>
    );
}

