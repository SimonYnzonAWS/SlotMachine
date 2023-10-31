class Slot extends React.Component {

    render() {
        const {s1, s2, s3} = this.props;
        console.log(this.props);

        return (
            <div className="containerMain">
                <div className="container">
                    {(s1 === s2 && s2 === s3) ? <h1 className="resultWinner">WINNER!</h1> : <h1 className="resultLoser">LOSER!</h1>}
                    <h1 className="slot">{s1} {s2} {s3}</h1>
                </div>
            </div>
        );
    }
}