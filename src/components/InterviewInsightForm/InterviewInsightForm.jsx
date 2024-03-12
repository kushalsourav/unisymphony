// InterviewInsightForm.js
import React, { useState } from 'react';
import './InterviewInsightForm.css';


const InterviewInsightForm = () => {
    const [formData, setFormData] = useState({
        intervieweeName: '',
        interviewDate: '',
        interviewerName: '',
        interviewInsights: '',
        questionInput: '',
        questions: []
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddQuestion = () => {
        const { questionInput, questions } = formData;
        if (questionInput.trim() !== "") {
            setFormData(prevState => ({
                ...prevState,
                questionInput: '',
                questions: [...questions, questionInput.trim()]
            }));
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData); 
        setFormData({
            intervieweeName: '',
            interviewDate: '',
            interviewerName: '',
            interviewInsights: '',
            questionInput: '',
            questions: []
        });
    };

    return (
        <div className="interviewinsightsform">
        <h2 className="interviewinsightsform__title">Interview Insights Form</h2>
        <form className="interviewinsightsform__form" onSubmit={handleSubmit}>
            <div className="interviewinsightsform__formGroup">
                <label htmlFor="intervieweeName">Interviewee Name:</label>
                <input type="text" id="intervieweeName" name="intervieweeName" value={formData.intervieweeName} onChange={handleChange} required />
            </div>
            <div className="interviewinsightsform__formGroup">
                <label htmlFor="interviewDate">Interview Date:</label>
                <input type="date" id="interviewDate" name="interviewDate" value={formData.interviewDate} onChange={handleChange} required />
            </div>
            <div className="interviewinsightsform__formGroup">
                <label htmlFor="interviewerName">Interviewer Name:</label>
                <input type="text" id="interviewerName" name="interviewerName" value={formData.interviewerName} onChange={handleChange} required />
            </div>
            <div className="interviewinsightsform__formGroup">
                <label htmlFor="interviewInsights">Interview Insights:</label>
                <textarea id="interviewInsights" name="interviewInsights" value={formData.interviewInsights} onChange={handleChange} required></textarea>
            </div>
            <div className="interviewinsightsform__formGroup">
                <label htmlFor="questionInput">Add Question:</label>
                <input type="text" id="questionInput" name="questionInput" value={formData.questionInput} onChange={handleChange} />
            </div>
            <button type="button" className="interviewinsightsform__addButton" onClick={handleAddQuestion}>Add Question</button>
            <button type="submit" className="interviewinsightsform__submitButton interviewinsightsform__addButton">Submit</button>
        </form>
        <div className="interviewinsightsform__questionsList">
            <h3>Questions:</h3>
            <ol>
                {formData.questions.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ol>
        </div>
    </div>
    );
};

export default InterviewInsightForm;
