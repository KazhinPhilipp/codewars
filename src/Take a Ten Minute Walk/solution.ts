enum CompassPoints {
    North = 'n',
    South = 's',
    East = 'e',
    West = 'w',
}

export function isValidWalk(walk: string[]): boolean {
    if (!walk || walk.length === 0 || walk.length !== 10) {
        return false;
    }
    const coordinates: [number, number] = [0, 0];
    walk.forEach((value: string) => {
        switch (value.toLowerCase()) {
            case CompassPoints.North:
                coordinates[1] += 1;
                break;
            case CompassPoints.South:
                coordinates[1] -= 1;
                break;
            case CompassPoints.West:
                coordinates[0] -= 1;
                break;
            case CompassPoints.East:
                coordinates[0] += 1;
                break;
        }
    });
    return coordinates[0] === 0 && coordinates[1] === 0;
}