# Habhit Maker

Habhit Maker is a simple React application to track and manage your daily habits. You can add new habits, view them, and delete them as needed.

## Getting Started

To get started with Habhit Maker, follow these steps:

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/habhit-maker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd habhit-maker
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

Once you've installed the dependencies, you can run the app locally:

```bash
npm start
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

## Features

### Adding Habits

You can add new habits by filling out the form in the `InputHabits` component. Enter the action you want to perform, the motivation behind it, where you plan to do it, the date, and time.

### Viewing Habits

All your added habits are displayed in a list in the `HabitsShow` component. You can see the action, motivation, environment, date, and time for each habit.

### Deleting Habits

If you want to remove a habit, simply click the "Delete" button next to it in the list. You can also clear all habits at once by using the "Clean All Habits" button in the `InputHabits` component.

## Components

### App

The main `App` component serves as the entry point of the application. It manages the state of habits using React's `useState` hook.

### InputHabits

The `InputHabits` component is responsible for rendering the form where users can add new habits. It includes input fields for action, motivation, environment, date, and time. Users can submit the form to add a new habit or clear all habits.

### HabitsShow

The `HabitsShow` component displays the list of added habits. It includes a table with columns for Sr. No, Action, Motivation, Environment, Date, Time, and a "Delete" button for each habit.

## Contributing

If you'd like to contribute to Habhit Maker, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/my-feature`)
6. Create a new Pull Request

We welcome contributions and feedback from the community!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README according to your project's specific details, such as adding more sections for advanced features, deployment instructions, or any other relevant information. Good luck with your Habhit Maker project! 🚀