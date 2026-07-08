import { Stage, Layer, Rect } from 'react-konva';

export default function PlotCanvas() {
    const plots = [
        { id: 1, status: 'available', x: 20, y: 50 },
        { id: 2, status: 'allocated', x: 140, y: 170 },
        { id: 3, status: 'available', x: 260, y: 50 },
        { id: 4, status: 'allocated', x: 380, y: 50 },
        { id: 5, status: 'available', x: 500, y: 50 },
    ];

    return (
        <Stage width={600} height={400}>
            <Layer>
                {plots.map(plot => (
                    <Rect
                        key={plot.id}
                        x={plot.x}
                        y={plot.y}
                        width={100}
                        height={100}
                        fill={plot.status === 'available' ? 'green' : 'red'}
                    />
                ))}
            </Layer>
        </Stage>
    );
}