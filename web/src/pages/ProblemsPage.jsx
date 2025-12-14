import { Link } from 'react-router';
import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import { PROBLEMS } from '../data/problems';
import { ChevronRightIcon, Code2Icon, SearchIcon } from 'lucide-react';
import { getDifficultyBadgeClass } from '../lib/util';

const ProblemPage = () => {
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState('All');

  const problems = useMemo(() => Object.values(PROBLEMS), []);

  const filteredProblems = useMemo(() => {
    return problems.filter(p => {
      const matchQuery = p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase());
      const matchDifficulty = difficulty === 'All' || p.difficulty === difficulty;
      return matchQuery && matchDifficulty;
    });
  }, [problems, query, difficulty]);

  const easyProblemsCount = problems.filter(p => p.difficulty === 'Easy').length;
  const mediumProblemsCount = problems.filter(p => p.difficulty === 'Medium').length;
  const hardProblemsCount = problems.filter(p => p.difficulty === 'Hard').length;

  return (
    <div className='min-h-screen bg-base-200'>
      <Navbar />

      <div className='max-w-6xl mx-auto px-4 py-12'>
        {/* HEADER */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>Practice Problems</h1>
          <p className='text-base-content/70'>Sharpen your coding skills with these curated problems</p>
        </div>

        {/* FILTER BAR */}
        <div className='mb-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between'>
          <div className='relative w-full md:max-w-sm'>
            <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-base-content/50' />
            <input
              type='text'
              placeholder='Search by title or category'
              value={query}
              onChange={e => setQuery(e.target.value)}
              className='input input-bordered w-full pl-9 outline-none'
            />
          </div>

          <select
            className='select select-bordered w-full md:w-48 outline-none bg-base-300 rounded-lg'
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
          >
            <option value='All'>All Difficulties</option>
            <option value='Easy'>Easy</option>
            <option value='Medium'>Medium</option>
            <option value='Hard'>Hard</option>
          </select>
        </div>

        {/* PROBLEMS LIST */}
        <div className='space-y-4'>
          {filteredProblems.map(problem => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className='card bg-base-100 hover:scale-[1.01] hover:shadow-md transition-all'
            >
              <div className='card-body'>
                <div className='flex items-center justify-between gap-4'>
                  {/* LEFT SIDE */}
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                        <Code2Icon className='text-primary' />
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-1 flex-wrap'>
                          <h2 className='text-lg font-semibold'>{problem.title}</h2>
                          <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className='text-sm text-base-content/60'>{problem.category}</p>
                      </div>
                    </div>
                    <p className='text-base-content/80 line-clamp-2'>
                      {problem.description.text}
                    </p>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className='hidden sm:flex items-center gap-1 text-primary'>
                    <span className='font-medium'>Solve</span>
                    <ChevronRightIcon className='size-5' />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {filteredProblems.length === 0 && (
            <div className='text-center py-16 text-base-content/60'>
              No problems found.
            </div>
          )}
        </div>

        {/* STATS FOOTER */}
        <div className='mt-12 card bg-base-100 shadow-lg'>
          <div className='card-body'>
            <div className='stats stats-vertical lg:stats-horizontal'>
              <div className='stat'>
                <div className='stat-title'>Total Problems</div>
                <div className='stat-value text-primary'>{problems.length}</div>
              </div>
              <div className='stat'>
                <div className='stat-title'>Easy</div>
                <div className='stat-value text-success'>{easyProblemsCount}</div>
              </div>
              <div className='stat'>
                <div className='stat-title'>Medium</div>
                <div className='stat-value text-warning'>{mediumProblemsCount}</div>
              </div>
              <div className='stat'>
                <div className='stat-title'>Hard</div>
                <div className='stat-value text-error'>{hardProblemsCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
