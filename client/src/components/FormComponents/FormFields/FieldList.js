            //////  Below are the questions that appear in TestForm   //////
            //////  They are ordered by table: User, Person, and Illness //////
            //////  Each input is generated according to the fieldType attribute //////

export const FieldList = [
    // {
    //     context: "user",
    //     fieldType: "input",
    //     id: "email",
    //     label: "Email Address",
    //     type: "email",
    //     autoComplete: "email",
    //     fullWidth: true,
    //     required: true
    // },
    // {
    //     context: "user",
    //     fieldType: "input",
    //     id: "password",
    //     label: "Password",
    //     type: "password",
    //     autoComplete: "current-password",
    //     fullWidth: true,
    //     required: true
    // },
    {
        context: "person",
        fieldType: "input",
        id: "firstName",
        label: "First Name",
        type: "text",
        autoComplete: "fname",
        required: true,
        fullWidth: true,
        autoFocus: true,
        xs: 6
    },
    {
        context: "person",
        fieldType: "input",
        id: "lastName",
        label: "Last Name",
        type: "text",
        autoComplete: "lname",
        fullWidth: true,
        required: true,
        xs: 6
    },
    {
        context: "person",
        fieldType: "date",
        id: "dateOfBirth",
        label: "Date Of Birth",
        required: true
    },
    {
        context: "person",
        fieldType: "radio",
        id: "sex",
        label: "Sex",
        options: [
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
            { value: "other", label: "Other" }
        ]
    },
    {
        context: "person",
        fieldType: "radio",
        id: "smoking",
        label: "Smoking History",
        options: [
            { value: "never", label: "Never Smoked" },
            { value: "current", label: "Currently Smoke" },
            { value: "former", label: "Used to Smoke" }
        ]
    },
    {
        context: "person",
        fieldType: "radio",
        id: "preExistingConditions",
        label: "Do you have any pre-existing medical conditions?",
        options: [
            { value: "false", label: "No" },
            { value: "true", label: "Yes" }
        ]
    },
    {
        context: "person",
        fieldType: "input",
        id: "listPreExitingConditions",
        label: "If you answered yes to the previous question, please list your pre-existing medical conditions:",
        type: "text",
        fullWidth: true,
        multiline: true,
        rows: "3"
    },
    {
        context: "person",
        fieldType: "radio",
        id: "sick",
        label: "Are you currently or were you previously ill due to coronavirus?",
        options: [
            { value: "false", label: "No" },
            { value: "true", label: "Yes" }
        ]
    },
    {
        context: "illness",
        fieldType: "radio",
        id: "tested",
        label: "Have you been tested for coronavirus?",
        options: [
            { value: "false", label: "No" },
            { value: "true", label: "Yes" }
        ]
    },
    {
        context: "illness",
        fieldType: "date",
        id: "dateOfTest",
        label: "What date was the test taken?"
    },
    {
        context: "illness",
        fieldType: "date",
        id: "dateOfOnset",
        label: "When did you begin experiencing symptoms?"
    },
    {
        context: "illness",
        fieldType: "input",
        id: "symptoms",
        label: "If you are positive or presumed positive for coronavirus, please list any symptoms you are experiencing.",
        type: "text",
        fullWidth: true,
        multiline: true,
        rows: "3"
    },
    {
        context: "illness",
        fieldType: "radio",
        id: "hospitalized",
        label: `Were you or are you currently hospitalized as a result of coronavirus?`,
        options: [
            { value: "false", label: "No" },
            { value: "true", label: "Yes" }
        ]
    },
    {
        context: "illness",
        fieldType: "date",
        id: "dateOfHospitalization",
        label: "If so, on what date?"
    },
    {
        context: "illness",
        fieldType: "radio",
        id: "intensiveCare",
        label: "If you were or are currently hospitalized due to coronavirus, did you stay in the Intensive Care Unit(ICU) at any time?",
        options: [
            { value: "false", label: "No" },
            { value: "true", label: "Yes" }
        ]
    },
    {
        context: "illness",
        fieldType: "radio",
        id: "death",
        label: "If you are filling this form out on another individulal's behalf, are they now deceased due to coronavirus or complications caused by coronavirus?",
        options: [
            { value: "false", label: "No" },
            { value: "true", label: "Yes" }
        ]
    },
    {
        context: "illness",
        fieldType: "date",
        id: "dateOfRecovery",
        label: "If you have recovered, what date did you last show symptoms?"
    }
]