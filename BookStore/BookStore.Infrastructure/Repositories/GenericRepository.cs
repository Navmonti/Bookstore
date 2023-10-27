using Microsoft.EntityFrameworkCore; 
using BookStore.Domain.IRepositories;
using BookStore.Infrastructure.DatabaseContext;

namespace BookStore.Infrastructure.Repositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        private readonly BookStoreDbContext _dbContext;
        public GenericRepository(BookStoreDbContext dbContext)
              => _dbContext = dbContext;

        public async Task<TEntity> AddAsync(TEntity entity)
        {
            await _dbContext.Set<TEntity>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }
        public async Task<TEntity> UpdateAsync(TEntity entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();

            return entity;
        }
        public async Task<TEntity> DeleteAsync(int id)
        {
            TEntity entity = await _dbContext.Set<TEntity>().FindAsync(id);

            if (entity == null)
                return null;

            _dbContext.Entry(entity).State = EntityState.Deleted;
            _dbContext.Set<TEntity>().Remove(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }
        public async Task<TEntity> GetByIdAsync(int id)
        {
            return await _dbContext.Set<TEntity>().FindAsync(id);
        }
        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await _dbContext.Set<TEntity>().ToListAsync();
        }
        public async Task<IEnumerable<TEntity>> GetAllByPaginationAsync(int pageNumber, int pageSize)
        {
            return await _dbContext.Set<TEntity>()
                                   .Skip((pageNumber - 1) * pageSize)
                                   .Take(pageSize)
                                   .ToListAsync();
        }

    }
}
