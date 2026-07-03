module.exports={
    default: {
        formatOptions: {
            "snippetInterface":"async-await"
        },

        
        requireModule: [
            "ts-node/register"
        ],
        require: [
            "src/hooks/*.ts",
            "src/test/steps/*.ts",
            "src/test/support/**/*.ts"
        ],
        paths: [
            "src/test/features/**/*.feature"
        ],
    

    publishQuiet: true,
    dryRun: false,

    format: [
        "progress-bar",
        "html:reports/cucumber-report.html",
        "json:reports/cucumber-report.json"
        
    ]
    }
};