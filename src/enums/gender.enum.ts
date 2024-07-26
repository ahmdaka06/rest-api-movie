enum Gender {
    NotSet = 0,
    Female = 1,
    Male = 2,
    NonBinary = 3
}

export function genderToString(gender: Gender): string {
    switch (gender) {
        case Gender.NotSet:
            return 'Not set / not specified';
        case Gender.Female:
            return 'Female';
        case Gender.Male:
            return 'Male';
        case Gender.NonBinary:
            return 'Non-binary';
        default:
            return 'Unknown';
    }
}