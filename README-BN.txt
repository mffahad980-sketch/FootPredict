FOOTPREDICT — Netlify API update

এই ফোল্ডার/ZIP-এ রয়েছে:
- public/index.html: ওয়েবসাইটের বর্তমান পেজ
- netlify/functions/matches.mjs: football-data.org API-তে নিরাপদ সার্ভার-সাইড অনুরোধ
- netlify.toml ও package.json: Netlify build/function configuration

গুরুত্বপূর্ণ:
1. Netlify Project-এর Environment variables-এ FOOTBALL_DATA_TOKEN নামের Secret value আগে থেকেই সেট করা থাকতে হবে।
2. API token কখনো HTML, JavaScript frontend, README, বা public repository-তে বসাবেন না।
3. Deploy সফল হলেও API-তে কোন কোন প্রতিযোগিতা/ম্যাচ পাওয়া যাবে তা football-data.org অ্যাকাউন্টের plan ও provider availability-র ওপর নির্ভর করবে।
4. এই ধাপ শুধু fixtures/results feed যুক্ত করে; AI prediction বা স্বয়ংক্রিয় betting picks তৈরি করে না।

Function endpoint: /.netlify/functions/matches
Default date window: Dhaka date today through the next 3 days.
