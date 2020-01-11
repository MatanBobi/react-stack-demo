import React from 'react';
import '../../vendors/fpsmeter.min';

export default class Description extends React.Component {
    state = {
        minFps: 60,
        isShowingMin: false
    };

    componentDidMount() {
        const anchor = this.fpsRef;

        // eslint-disable-next-line no-undef
        const meter = new FPSMeter(anchor, {
            heat: true,
            graph: true
        });

        function tick() {
            meter.tick();
            requestAnimationFrame(tick);
        }

        tick();

        this.intervalCleaner = setInterval(() => {
            if (window.fpsHistory && window.fpsHistory[19] && this.state.isShowingMin) {
                for (let i = 0; i < window.fpsHistory.length; i++) {
                    if (window.fpsHistory[i] < this.state.minFps) {
                        this.setState({minFps: window.fpsHistory[i].toFixed(2)})
                    }
                }
            }
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalCleaner)
    }

    render() {
        return (
            <div className="marketing">
                <div className="spacer"/>
                <div ref={fpsRef => {
                    this.fpsRef = fpsRef
                }} className="fps"/>
                <div className='min-fps' onClick={() => {
                    this.setState(prevState => ({isShowingMin: !prevState.isShowingMin}))
                }}>
                    {this.state.isShowingMin ? `Min: ${this.state.minFps}` : `Show Min FPS`}
                </div>
            </div>
        );
    }
}