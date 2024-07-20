import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        git:"F:/Program Files/Git/bin/git.exe",
        repo: 'https://github.com/Orsailius/personal-site', // Update to point to your repository
        user: 
        {
            name: 'Orsailius',
            email: 'sumemail8472@gmail.com'
        },
        dotfiles: true,
        nojekyll: true,
        cname:"www.justinmoore.page",
        message:"Auto Generated Commit"
    },
    (err) => 
    {
        console.log(err);
        console.log('Deploy Complete!');
    }
);