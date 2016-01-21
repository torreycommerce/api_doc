Setup
-------

In folder run:

    bundle install

Deployment
----------

Your AWS key and secret token should be stored as environment variables. If you are using bash they can be added like this:

    export API_BUCKET_KEY=<AWS KEY>
    export API_BUCKET_SECRET=<AWS SECRET KEY>

Once those variables exist, simply reload your shell.

To deploy you simply run

    cap production deploy

From within the main folder





