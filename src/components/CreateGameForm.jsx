import React from 'react'

const CreateGameForm = ({handleSubmit, formData, handleChange}) => {
  return (
    <>
    <form
        onSubmit={handleSubmit}
        className="bg-gray-300 p-6 rounded-lg shadow-lg flex flex-col gap-4 w-1/3"
      >
        <div>
          <input
            type="text"
            name="teamOne"
            value={formData.teamOne}
            onChange={handleChange}
            placeholder="Team One"
            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="teamTwo"
            value={formData.teamTwo}
            onChange={handleChange}
            placeholder="Team Two"
            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Difficulty
          </label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
          >
            <option value="EASY">EASY</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HARD">HARD</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Words
          </label>
          <input
            type="number"
            name="numberOfItems"
            value={formData.numberOfItems}
            onChange={handleChange}
            min={1}
            placeholder="Enter Number of Items"
            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Points to Win
          </label>
          <input
            type="number"
            name="maximumPoints"
            value={formData.maximumPoints}
            onChange={handleChange}
            min={1}
            placeholder="Enter Number of Items"
            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-300 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-500 tracking-widest"
        >
          Create Game
        </button>
      </form>
    </>
  )
}

export default CreateGameForm