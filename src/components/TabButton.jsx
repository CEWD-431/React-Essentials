export default function TabButton ({children, onSelect}) {
    return <div><button onClick={onSelect}>{children}</button></div>
}