package javaSpring.Project.BookApi;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javaSpring.Project.BookApi.models.Book;
import javaSpring.Project.BookApi.models.Comment;
import javaSpring.Project.BookApi.services.BookService;
import javaSpring.Project.BookApi.services.CommentService;


@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/api/books")
public class BookRouting {
	private final BookService bookService;
	private final CommentService commentService;
	
	public BookRouting(BookService bookService, CommentService commentService) {
		this.bookService = bookService;
		this.commentService = commentService;
	}
	
	@RequestMapping("")
	public List<Book> getBooks() {
		return bookService.allBooks();
	}
	
	@RequestMapping("/{id}")
	public Book bookById(@PathVariable("id") Long id) {
		return bookService.findBook(id);
	}
	
	@PostMapping("/new")
	public Book newBook(@RequestBody Book newBook) {
		return bookService.createBook(newBook);
	}
	
	@PutMapping("/comment/{id}")
	public Book newComment(@PathVariable("id")Long id, @RequestBody Comment newComment) {
		Book book = bookService.findBook(id);
		if (book != null) {
			newComment.setBook(book);
			commentService.createComment(newComment);
		}
		
		
		return book;
	}
}
