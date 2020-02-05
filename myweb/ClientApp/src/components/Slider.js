import { Component } from 'react'

const ANIM_DURATION = 300
const FRAME_TIME = 10

export default class Slider extends Component {
    constructor(props) {
        super(props)
        this.mSeriesData = props.seriesData
        this.mSliderRef = React.createRef();
        this.state = { isHideLeft: true, isHideRight: false; }
        this.mScrolled = 0;
    }

    componentDidMount() {
        this.refreshButtonHide()
    }

    getSliderPadding() {
        return this.mSliderRef.current.firstChild.offsetLeft
    }



}