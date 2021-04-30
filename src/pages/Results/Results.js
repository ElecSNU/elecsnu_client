import React, { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LabelList,
} from 'recharts';
import useFirestore from '../../hooks/useFirestore';

import './Results.css';

const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 25;

    return (
        <g>
            <circle
                cx={x + width / 2}
                cy={y - radius}
                r={radius}
                fill='#8884d8'
            />
            <text
                x={x + width / 2}
                y={y - radius}
                fill='#fff'
                textAnchor='middle'
                dominantBaseline='middle'
            >
                {value}
            </text>
        </g>
    );
};

const Results = () => {
    const [electionName, setElectionName] = useState('');
    const [winner, setWinner] = useState('');
    const [data, setData] = useState([]);

    const electionDocs = useFirestore('newelections').docs;

    const loadData = () => {
        let electionId = window.location.pathname.split(
            '/'
        )[3];
        if (electionDocs !== {}) {
            let electionDetails = {};
            electionDocs.forEach((e) => {
                if (e.id === electionId) {
                    setElectionName(e.election_name);
                    electionDetails = e;
                    return;
                }
            });

            let voteData = {};

            if (Object.keys(electionDetails).length === 0) {
                console.log('okay');
            } else {
                electionDetails.election_candidates.forEach(
                    (c, i) => {
                        voteData[i] = {
                            name: c.candidate_name,
                            votes: 0,
                        };
                    }
                );

                electionDetails.election_votes.forEach(
                    (vote) => {
                        voteData[vote.candidate_chosen][
                            'votes'
                        ] =
                            voteData[vote.candidate_chosen][
                                'votes'
                            ] + 1;
                    }
                );

                // Setting Winner
                let finalVotes = Object.values(voteData);
                finalVotes.sort(function (a, b) {
                    var keyA = a['votes'],
                        keyB = b['votes'];
                    // Compare the 2 dates
                    if (keyA > keyB) return -1;
                    if (keyA < keyB) return 1;
                    return 0;
                });
                setWinner(finalVotes[0]['name']);

                setData(Object.values(voteData));
            }
        }
    };

    useEffect(() => {
        if (electionDocs) loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [electionDocs]);

    return (
        <div id='results'>
            <div className='results-container border-radius-15 box-shadow background-light-translucent'>
                <div className='results-heading heading-text background-1-translucent border-radius-15 foreground-light center-text'>
                    Results for {electionName}
                </div>

                <div className='results-heading heading-text foreground-accent2 center-text'>
                    The winner till now is
                    <span
                        className='foreground-accent1 capital-text winner'
                        style={{ marginLeft: '1rem' }}
                    >
                        {winner}
                    </span>
                </div>

                <BarChart
                    width={1000}
                    height={500}
                    data={data}
                    margin={{
                        top: 75,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey='votes' fill='#d8315b'>
                        <LabelList
                            dataKey='votes'
                            content={renderCustomizedLabel}
                        />
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Results;
