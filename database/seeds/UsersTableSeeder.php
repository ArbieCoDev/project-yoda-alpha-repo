<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
 
        // Create 50 product records
        for ($i = 0; $i < 50; $i++) {
            user::create([
                'infocenter_id' => $faker->randomNumber(2),
                'email' => $faker->email,
                'password' => bcrypt('secret'),
                'role' => '1',
                'auth_token' => null
            ]);
        }
    }
}
