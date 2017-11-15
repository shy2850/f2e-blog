interface Props {
    children?: ElementNode[]|string
}
interface Component {
    render: Function
}
interface ElementNode {
    nodeType: Function | string
    props?: any
    children: ElementNode[] | string | null
    toString(): string
}
interface Menu {
    to: string
    title: string
    children?: Menu[]
}
