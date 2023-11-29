function Input ({ onAddTask})  {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const description = formData.get('description');
        onAddTask(description);
        event.target.reset();
    };

    return (
        <form className="form d-flex align-items-center p-3 gap-2" onSubmit={handleSubmit}>
            <label htmlFor="description"> Nueva Tarea </label>
            <input type="text" name="description" id ="description" required/>
            <input type="submit" value="Crear" className="btn btn-primary" />
        </form>
    );

}

export default Input;