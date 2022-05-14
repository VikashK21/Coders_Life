require('./crudOper.js')
const input = require('readline-sync');

async function run() {
    try {
        while (true) {
            const option = input.questionInt(`\n1. Show all Posts\t\t2. Create a Post\n3. Update the Post\t\t4. Change the Post\n5. Delete the Post\t\t6. Exit Operations\nSelect an Operation: `);
            if (option === 1) {

                await getAll('posts')
            }
            else if (option === 2) {

                await newPost('posts', {
                    name: input.question('Enter your named: '),
                    title: input.question('Create a title: '),
                    author: input.question('Author of this post: '),
                })
            }
            else if (option === 3) {

                await updatePost('posts', 10, {
                    name: 'Groot', 
                    age: 111 
                })
            }
            else if (option === 4) {

                await changePost('posts', 2, {
                    name: '',
                    title: '',
                    author: '',
                })
            }
            else if (option === 5) {

                await deletePost('posts', 9)
            }
            else if (option === 6) {
                break;
            }
            else {
                console.log('\nSomething went wrong!! Please try again.');
            }
        }
    } catch (err) {
        console.error(`This is the running error ${err.message}`);
    }
}
run()

