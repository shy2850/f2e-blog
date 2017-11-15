export default class implements Component {
    constructor (props: Props) {
        this.props = props
    }
    props: Props
    render(): ElementNode | string {
        return ''
    }
}